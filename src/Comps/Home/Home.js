import React,{useState, useEffect} from 'react'
import Main from "../Main/Main"
import { FormInput } from "../MainForm/FormInput"

export  function Home() {

 const [data, setCountry] = useState([]);
  let [text, setText] = React.useState("");

  let [defaultApi, setDefaultApi] = React.useState(
    "https://restcountries.com/v3.1/all",
  );
  let [changeApi, setChangeApi] = React.useState("");

  const InputValue=(props)=>{
    console.log(changeApi);
    setText(props)
    setChangeApi("https://restcountries.com/v3.1/name/"+props)
  }  

  const SelectValue=(props)=>{
    
    if (props == "Filter by Region" ) {
      setText("")
      setChangeApi('https://restcountries.com/v3.1/all/')
    }else if(props != ""){
      setText(props)
      setChangeApi('https://restcountries.com/v3.1/region/'+props)
    }
  }

  let { error, setError } = React.useState(false);



  useEffect(() => {
    fetch(text ? changeApi: defaultApi)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          alert("Sorry");  
          window.location.reload()
        }
      })
      .then((data) => setCountry(data))
      .catch((error) => console.log(error));
  }, [text,changeApi]);

  return (
    <>
        <main>
        <section className="hero">
          <div className="container">
            <FormInput GetInputValue={InputValue} GetSelectValue={SelectValue}/>
            <div className="hero-father-box">
              {data.length !== 0 ? (
                <ul className="row hero-list">
                  {data.map((item) => {
                    return <Main key={item.id} item={item} />;
                  })}
                </ul>
              ) : (
                []
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
