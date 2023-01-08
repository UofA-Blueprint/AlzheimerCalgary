import { useState } from 'react'
import Dashboard from './views/staff/Dashboard'
import Activity from './views/staff/Activity'
import Client from './views/staff/Client'
import Staff from './views/staff/Staff'
import Page from './types/Page.enum'

export default function StaffApp() {
  const [page, setPage] = useState<Page>(Page.DASHBOARD)

  const getPage = () => {
    switch (page) {
      case Page.DASHBOARD:
        return <Dashboard setPage={setPage} />
      case Page.ACTIVITY:
        return <Activity setPage={setPage} />
      case Page.CLIENT:
        return <Client setPage={setPage} />
      case Page.STAFF:
        return <Staff setPage={setPage} />
    }
  }

  return getPage()
}
