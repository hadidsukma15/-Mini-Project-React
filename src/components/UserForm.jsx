import { useState } from 'react'
import Input from './ui/Input'
import Button from './ui/Button'

const emptyValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  role: 'student',
  university: '',
  city: '',
}

function validate(values) {
  const errors = {}

  if (!values.firstName.trim()) errors.firstName = 'Nama depan wajib diisi.'
  if (!values.lastName.trim()) errors.lastName = 'Nama belakang wajib diisi.'

  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Format email tidak valid.'
  }

  if (values.age !== '') {
    const age = Number(values.age)
    if (Number.isNaN(age) || age < 10 || age > 100) {
      errors.age = 'Usia harus berupa angka antara 10 sampai 100.'
    }
  }

  return errors
}

function UserForm({ initialValues = emptyValues, onSubmit, onCancel, submitting }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    await onSubmit({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      age: values.age === '' ? undefined : Number(values.age),
      role: values.role,
      university: values.university.trim(),
      address: values.city.trim() ? { city: values.city.trim() } : undefined,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#e7e7e3] bg-white p-5"
    >
      <div className="grid grid-cols-2 gap-3.5 max-[520px]:grid-cols-1">
        <Input
          label="Nama Depan"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
          placeholder="Contoh: Budi"
        />
        <Input
          label="Nama Belakang"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
          placeholder="Contoh: Santoso"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="budi@example.com"
          className="col-span-2 max-[520px]:col-span-1"
        />
        <Input
          label="Usia"
          name="age"
          type="number"
          min="10"
          max="100"
          value={values.age}
          onChange={handleChange}
          error={errors.age}
          placeholder="20"
        />

        <div>
          <label
            htmlFor="role"
            className="mb-1.5 block text-xs font-bold text-[#2d3137]"
          >
            Peran
          </label>
          <select
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            className="w-full rounded-md border border-[#dfe1db] bg-white px-3 py-2.5 text-sm text-[#15181c] transition focus:border-[#3b5df5] focus:outline-none focus:ring-2 focus:ring-[#3b5df5]/15"
          >
            <option value="student">Student</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <Input
          label="Institusi / Universitas"
          name="university"
          value={values.university}
          onChange={handleChange}
          placeholder="Universitas Indonesia"
        />
        <Input
          label="Kota"
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="Jakarta"
        />
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={onCancel} disabled={submitting}>
          Batal
        </Button>
        <Button type="submit" size="sm" disabled={submitting}>
          {submitting ? 'Menyimpan…' : 'Simpan Data'}
        </Button>
      </div>
    </form>
  )
}

export default UserForm
