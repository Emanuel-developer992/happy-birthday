import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Portal from './page/Portal'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/portal" replace />} />
                <Route path="/portal" element={<Portal/>} />                
            </Routes>
        </BrowserRouter>
    )
}