import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Help from './Help';
import Footer from './Footer';
import ForgotPassword from './ForgotPassword';
import ResearcherDashboard from './ResearcherDashboard';
import AdminDashboard from './AdminDashboard';
import FunderDashboard from './FunderDashboard';
import ProfileManagement from './ProfileManagement';
import SubmitProposal from './SubmitProposal';
import ViewProposals from './ViewProposals';
import Chat from './Chat';
import Forums from './Forums';
import ManageUsers from './ManageUsers';
import ManageGrants from './ManageGrants';
import SearchGrants from './SearchGrants';
import SearchEvents from './SearchEvents';
import ReviewProposals from './ReviewProposals';
import ManageEvents from './ManageEvents';
import CollaborationTools from './CollaborationTools';
import DiscussionForums from './DiscussionForums';
import ManageNews from './ManageNews';
import ManageSupport from './ManageSupport';
import FileSharing from './FileSharing';
import ManageProfile from './ManageProfile';
import { AuthProvider, useAuth } from './AuthContext';
import AdminEvents from './AdminEvents';
import ReviewGrants from './ReviewGrants';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/help" element={<Help />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protect all routes using the ProtectedRoutes wrapper */}
            <Route path="/*" element={<ProtectedRoutes />} /> 
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      {/* Define all specific routes you need */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/researcher" element={<ResearcherDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/funder" element={<FunderDashboard />} />
          <Route path="/profile" element={<ProfileManagement />} />
          <Route path="/submit-proposal" element={<SubmitProposal />} />
          <Route path="/view-proposals" element={<ViewProposals />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/file-sharing" element={<FileSharing />} />
          <Route path="/events" element={<ManageEvents />} />
          <Route path="/adminevents" element={<AdminEvents />} />
          <Route path="/manage-grants" element={<ManageGrants />} />
          <Route path="/grants" element={<SearchGrants />} />
          <Route path="/register-events" element={<SearchEvents />} />
          <Route path="/review-proposals" element={<ReviewProposals />} />
          <Route path="/review-grants" element={<ReviewGrants />} />
          <Route path="/collab-tools" element={<CollaborationTools />} />
          <Route path="/profile1" element={<ManageProfile />} />
          <Route path="/manage-news" element={<ManageNews />} />
          <Route path="/manage-support" element={<ManageSupport />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/discussion-forums" element={<DiscussionForums />} />

          

    </Routes>
  );
};

export default App;