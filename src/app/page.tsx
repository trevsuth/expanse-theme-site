import SidebarComponent from '../../components/SidebarComponent';

const Page = () => {
  return (
    <div className='main-div'>
      <div className="page-container">
        <SidebarComponent />
      </div>
      <div className="main-content">
        <p>This is my Page</p>
      </div>
    </div>
  );
};

export default Page;