import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src='./src/components/img/logo.png' alt='LOGO'></img>
          <div className='headerInfo'>
            <h3>Сибирский Мишка</h3>
            <p>мастерская BMW/обвесы/тюнинг/</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li><img src='./src/components/img/trolley.png' alt='basket'></img> <span></span></li>
          <li><img src='./src/components/img/user.png' alt='user'></img></li>
        </ul>
      </header>
      <div className='content'>
        <h1>Все товары</h1>


        <div className='card'>
          <img></img>
          <p>Описание</p>
          <div>
            <div>
              <span>Цена</span>
              <b>123</b>
              <button>
                <img width={11} height={11} src='./src/components/img/plus.svg' alt='plus'></img>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
