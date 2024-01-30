import SidebarComponent from '../../components/SidebarComponent';
import OnScreenKeyboard from '../../components/OnScreenKeyboard';

const Page = () => {
  return (
    <div className='main-div'>
      <div className="page-container">
        <SidebarComponent />
      </div>
      <div className="main-content">
        <p>Press A to show/hide sidebar</p>
      </div>
      <OnScreenKeyboard />
    </div>
  );
};

export default Page;