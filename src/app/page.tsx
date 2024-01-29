import SidebarComponent from '../../components/SidebarComponent';

const Page = () => {
  return (
    <div className='main-div'>
      <div className="page-container">
        <SidebarComponent />
      </div>
      <div className="main-content">
        <p>Press A to show/hide sidebar</p>
      </div>
    </div>
  );
};

export default Page;