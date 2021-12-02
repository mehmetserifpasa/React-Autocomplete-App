import {useEffect, useState} from 'react';


const data = [
    {
      id: 1,
      title: "test 1"
    },

    {
      id: 2,
      title: "Test 1"
    },

    {
      id: 3,
      title: "deneme 1"
    },

    {
      id: 4,
      title: "Deneme 2"
    },
]

function App() {

  const [search, setSearch] = useState(""); // inputa girilen veri
  const [result, setResult] = useState(false);
  const isTyping = search.replace(/\s+/, '').length > 0; // eğer girilen karakter boşluksa replace et ve ona göre ayar yap.

  
  useEffect(() => {
    if (isTyping) {
      // inputun içine girilen verinin data'nın içerisinde olup olmadığını kontrol ediyor
      // includes() bir dizinin girişleri arasında belirli bir değer içerip içermediğini belirler ve uygun şekilde doğru veya yanlış döndürür.
      const filteredResult = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      setResult(filteredResult.length  ? filteredResult : false)
    }
    else {
      setResult(false)
    }
  }, [search])


  return (
    <>
      <div className="search">
        <input type="text" className={isTyping ? 'typing' : null} placeholder="Bir şeyler giriniz..." onChange={(e) => setSearch(e.target.value)}  />
        {isTyping && (
          <div className="search-result">
            {result && result.map(item => (
              <div key={item.id} className="search-result-item">
                {item.title}
              </div>
            ))}

            {!result && (
              <div className="result-not-found">
                "{search}" ile ilgili bir şey bulamadık!
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
