import profilePic from './assets/profile.jpg';

function About() {
    return (
        <div className="aboutCard">
            <img src={profilePic} alt="Profile Picture" />
            <div>
                <h1>I'm Chandirasegaran</h1>
                <p>
                    <b>
                        Student at Pondicherry University. <br />
                        Currently Pursuing M.Sc. 5 yr. Integrated Computer Science <br />
                        DOB: 25<sup>th</sup> March, 2002
                    </b>
                </p>
                {/* <h4>Student at Pondicherry University</h4>
            <h4>Doing 5yr M.Sc. Integrated Computer Science</h4>
            <h4>DOB: 25<sup>th</sup> March, 2002</h4> */}
            </div>
        </div>
    );
}
export default About