// create your App component here
import React, {useEffect, useState} from "react"

function App() {
    const [dogImage, setDogImage] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setDogImage(data.message))
    }, [])

    if (!dogImage) return <p>Loading...</p>

    return (
        <img src={dogImage} alt="A Random Dog"></img>
    )
}

export default App