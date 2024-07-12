import './App.css'
import {useState} from "react";

function App() {

    const [colors, setColors] = useState<string>('');
    const [colorsArray, setColorsArray] = useState<string[]>([]);

    const handleChange = (event: any) => {
        const {value} = event.target;
        setColors(value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const createArray = colors.replace(/ /g, '').split(',').map(color => color.slice(1, -1))
        setColorsArray(createArray)

    }

    const handleClear = () => {
        setColorsArray([])
        setColors('')
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className={'input-container'}>
                    <label htmlFor="name">Enter hex codes:</label>
                    <textarea value={colors} onChange={handleChange} id="name" name="name" required/>
                    <div className={'button-container'}>
                        <button onClick={handleClear}>Clear</button>
                        <button type={'submit'}> Submit</button>
                    </div>
                </div>
            </form>
            <div>
                <p>{colors}</p>
            </div>
            {colorsArray && <div className={'colors-container'}>
                {colorsArray.map((color, index) => (
                    <div className={'color'} style={{backgroundColor: `${color}`}}></div>
                ))}
            </div>}

        </>
    )
}

export default App
