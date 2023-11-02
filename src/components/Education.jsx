import { useState } from "react";
import Uct from "../img/uct.png"
function Education() {
    const [education] = useState([
        {
            institution: 'University of Cape Town',
            qualification: 'Bachelor of Commerce (Honours) specializing in Information Systems',
            year: 'Feb 2021-Nov 2021'
        },
        {
            institution: 'University of Cape Town',
            qualification: 'Bachelor of Commerce specializing in Information Systems',
            year: 'Mar 2017-Nov 2020'
        }
    ])
    return (<>
        <div className="self">
            <div id="education" className="education">
                <h1>Education</h1>
                {education && education.map((x, index) =>
                    <div key={index}>
                        <div><img alt="uct logo" src={Uct} width={100} /></div>
                        <div>
                            <h3>{x.institution}</h3>
                            <h4>{x.qualification}</h4>
                            <label>{x.year}</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>);
}
export default Education