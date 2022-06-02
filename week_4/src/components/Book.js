import React, { useState } from 'react'

const Book = () => {
    const [formData, setFormData] = useState({
        bookName: '',
        isLegalAge: false,
        cars: '',

    })


    let handleFormData = (e) => {
        const { name, value, type, checked } = e.target;
        type === 'checkbox' ? setFormData({ ...formData, [name]: checked }) : setFormData({ ...formData, [name]: value })
    }

    const hanleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            
            <input type="text" name="bookName"
                value={formData.bookName}
                onChange={(e) => handleFormData(e)}
            />
            <br />
            <input
                type="checkbox"
                name="isLegalAge"
                checked={formData.isLegalAge}
                onChange={(e) => handleFormData(e)}
            />

            <select name="cars" onChange={(e) => handleFormData(e)}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <input type="radio" id="html" name="fav_language" value="HTML" onChange={(e) => handleFormData(e)} />
            <label htmlFor="html">HTML</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" onChange={(e) => handleFormData(e)}/>
            <label htmlFor="css">CSS</label><br />

            {formData.bookName}
            {formData.isLegalAge}
            <h1>{formData.cars}</h1>
            
            <button type='submit' onClick={() => hanleSubmit()}>send</button>
        </div>
    )
}

export default Book