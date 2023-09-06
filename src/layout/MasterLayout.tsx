import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppMenu from './components/AppMenu/AppMenu';
import SideBar from './components/SideBar/SideBar';
import '../assets/styles/MasterLayout.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { dataAPI } from '../posts/data-api';
import { useAppContext } from '../helpers/app-store';

const API_LINK = 'https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8';

const MasterLayout = () => {
  const { username } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) navigate('/login');
    const fetchData = async () => {
      const storedPosts = await dataAPI.getAllPosts();
      if (!storedPosts || storedPosts.length === 0) {
        try {
          const response = await axios.get(API_LINK);
          const data = response.data;
          dataAPI.setPosts(data);
        } catch (error) {
          toast.error('An error occurred in fetching data');
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className="all">
      <Header />
      <section className="row all-main">
        <div className="col-xs-12 col-md-2 d-none d-md-block">
          <AppMenu />
        </div>
        <section className="col-xs-12 col-md-7 main">
          <Outlet />
        </section>
        <div className="col-xs-12 col-md-3 d-none d-md-block">
          <SideBar />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MasterLayout;
