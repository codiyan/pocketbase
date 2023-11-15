import React from 'react'

const Dashboard = React.lazy(() => import('./views/dasboard/Dashboard'));
const Orders = React.lazy(() => import('./views/orders/Orders'))
const NewPatients = React.lazy(() => import('./views/patients/NewPatient'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/orders', name: 'Orders', element: Orders },
  {
    path: '/patients/new',
    name: 'Patients',
    element: NewPatients,
  }
]

export default routes
