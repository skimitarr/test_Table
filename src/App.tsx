import { Routes, Route, } from 'react-router-dom';

import Header from './components/Header/Header';
import Accounts from './pages/Accounts';
import Profiles from './pages/Profiles';
import Campaigns from './pages/Campaigns';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/accounts' element={<Accounts />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":id" element={<Profiles />} />
        </Route>
        <Route path="/campaigns" element={<Campaigns />}>
          <Route path=":id" element={<Campaigns />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
