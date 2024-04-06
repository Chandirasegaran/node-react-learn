function Qualifications(){

  const sslc = "T.T.Thiru.Vi.Ka. Govt. High School"
  const hsc = "V.O.C. Govt. Higher Secondary School"
  const college = "Pondicherry University"

    return(
        <>
        <h3>My Qualifications</h3>
        <ul>
            <li>SSLC at {sslc}</li>
            <li>HSC at {hsc}</li>
            <li>M.Sc. Integrated 5 Years Computer Science at {college}</li>
        </ul>
        </>
    );
}

export default Qualifications