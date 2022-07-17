import { 
    Routes, 
    Route,
    Link,
    Redirect
} from "react-router-dom"
import HomePage from "./HomePage.jsx"
import RoomJoinPage from "./RoomJoinPage.jsx"
import CreateRoomPage from "./createRoomPage.jsx"
export default function App(){
    return(
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/join" element={<RoomJoinPage />}></Route>
            <Route path="/create" element={<CreateRoomPage/>}></Route>
        </Routes>
    )
}