import SidebarComponent from './../components/SidebarComponent';
import OnScreenKeyboard from './../components/OnScreenKeyboard';

const Page = () => {
  return (
    <div className='main-div'>
      <SidebarComponent />
        <p>This is the weather page</p>
        <p>Press A to show/hide sidebar</p>
        <p>Press V to show/hide keyboard</p>
      <OnScreenKeyboard />
    </div>
  );
};

export default Page;