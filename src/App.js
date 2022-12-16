import React, { useEffect, useState } from "react";
import Main from "./Comps/Main/Main";
import Header from "./Comps/Header/Header";
import "../src/Comps/MainForm/formInput.css";
import "./App.css";

const App = () => {
  const [data, setCountry] = useState([]);
  let [text, setText] = React.useState("");
  let { error, setError } = React.useState(false);

  let [api, setApi] = React.useState("https://restcountries.com/v3.1/all");
  function TextChange(props) {

    setText(props.target.value);
    let InputText = props.target.value;
    if (InputText === "") {
      return (InputText = "https://restcountries.com/v3.1/all");
    } else {
      setApi("https://restcountries.com/v3.1/name/" + InputText);
    }
  }

  function selevtValue(props) {
    props.preventDefault()
    // console.log(props.target.value);
    if (props.target.value === "Filter by Region") {
      return setApi("https://restcountries.com/v3.1/all");
    } else {
      setApi("https://restcountries.com/v3.1/region/" + props.target.value);
    }
  }

  async function countryData() {
    try {
      let res = await fetch(api);
      let dat = await res.json();
      if (res.status==404) {
        setCountry([]);
      }else{
          setCountry(dat);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    countryData(data);
    setApi(api);
  }, [data, api, text]);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-father-box">
              <div
                className="form"
                autoComplete="off">
                <div className="d-flex gap-2">
                  <input
                    onChange={TextChange}
                    className="hero-input"
                    type="search"
                    placeholder="Search for a country…"
                    name="search"
                    required
                  />
                </div>
                <select
                  onChange={selevtValue}
                  className="select"
                  name="country"
                  id="country">
                  <option>Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
              {data.length !== 0 ? (
                <ul className="row hero-list">
                  {data.map((item) => {
                    return <Main key={item.id} item={item} />;
                  })}
                </ul>
              ):[]}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

// const data = [
//     {
//       id: 1,
//       name: 'Germany',
//       population: '81,770,900',
//       region: 'Europe',
//       capital: 'Berlin',
//       img: 'https://flagcdn.com/de.svg',
//     },
//     {
//       id: 2,
//       name: 'United States of America',
//       population: '323,947,000',
//       region: 'Americas',
//       capital: 'Washington, D.C.',
//       img: 'https://flagcdn.com/us.svg',
//     },
//     {
//       id: 3,
//       name: 'Brazil',
//       population: '206,135,893',
//       region: 'Americas',
//       capital: 'Brasília',
//       img: 'https://flagcdn.com/br.svg',
//     },
//     {
//       id: 4,
//       name: 'Iceland',
//       population: '334,300',
//       region: ' Europe',
//       capital: 'Reykjavík',
//       img: 'https://flagcdn.com/is.svg',
//     },
//     {
//       id: 5,
//       name: 'Afghanistan',
//       population: '27,657,145',
//       region: 'Asia',
//       capital: 'Kabul',
//       img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
//     },
//     {
//       id: 6,
//       name: 'Åland Islands',
//       population: '28,875',
//       region: 'Europe',
//       capital: 'Mariehamn',
//       img: 'https://flagcdn.com/ax.svg',
//     },
//     {
//       id: 7,
//       name: 'Albania',
//       population: '2,886,026',
//       region: 'Europe',
//       capital: 'Tirana',
//       img: 'https://flagcdn.com/al.svg',
//     },
//     {
//       id: 8,
//       name: 'Algeria',
//       population: '40,400,000',
//       region: 'Africa',
//       capital: 'Algiers',
//       img: 'https://flagcdn.com/dz.svg',
//     },
//   ];
