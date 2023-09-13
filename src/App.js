import logo from './logo.svg';
import './App.css';

import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/userlist/userlist.component';
import { FooterComponent } from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <UserListComponent></UserListComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
