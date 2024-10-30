import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar"
import { useEffect, useState } from "react";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPost";
import DashUsers from "../components/DashUser";
import DashboardComp from "../components/DashboardComp";
import DashComments from "../components/Dashcomments";
import Allposts from "../components/AllPost";

const Dashboard = () => {

  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {tab === 'posts' && <DashPosts />}
      {tab === 'users' && <DashUsers />}
      {tab === 'comments' && <DashComments />}
      {tab === 'dash' && <DashboardComp />}
      {tab === 'allposts' && <Allposts />}
    </div>
  )
}

export default Dashboard