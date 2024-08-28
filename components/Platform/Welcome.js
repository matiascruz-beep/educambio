import React from 'react'

export default function Welcome({name, tematic, content, date, hour, student, image}) {
    return (

       <div className="grid-flow-col grid-cols-2"> 
            
            
            <div className="bg-[#5EAFF9] bg-opacity-50 rounded-[80px] w-[15in] ml-[3in] mt-6 h-[2in]">
                <h1>Hola! Bienvenido {name}</h1>
                <p>En este apartado, podas ver las clases en las que te encuentras inscripto, empecemos a aprender!</p>
                <img src={image}/>
            </div>
    

            <div className="bg-orange-800 rounded-[80px] w-[15in] ml-[3in] mt-20 h-[5in]">
                                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            </tr>
                            <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                            </tr>
                            <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                            </tr>
                        </tbody>
                        </table>

            </div>
            
        </div>
    )
}
