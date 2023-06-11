import '../style/main.css'
//import Logo from './../assets/images/logo.png'
import DarkMode from './dark-mode.jsx'

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className='nav-left'>
            <div className="nav-link-container">
              <svg className='svg-clr' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#211e1e" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 10.7602V17.5967C22 19.4377 20.5076 20.93 18.6667 20.93H17.4444C16.8922 20.93 16.4444 20.4823 16.4444 19.93V19.7078C16.4444 19.1555 16.8922 18.7078 17.4444 18.7078H18.6667C19.2803 18.7078 19.7778 18.2104 19.7778 17.5967V10.7602C19.7778 10.4141 19.6165 10.0878 19.3416 9.87755L12.6749 4.77951C12.2765 4.47486 11.7235 4.47485 11.3251 4.77951L4.65839 9.87755C4.38348 10.0878 4.22222 10.4141 4.22222 10.7602V17.5967C4.22222 18.2104 4.71968 18.7078 5.33333 18.7078H6.55556C7.10784 18.7078 7.55556 19.1555 7.55556 19.7078V19.93C7.55556 20.4823 7.10784 20.93 6.55556 20.93H5.33333C3.49239 20.93 2 19.4377 2 17.5967V10.7602C2 9.72193 2.48377 8.74299 3.3085 8.11231L9.97517 3.01427C11.1704 2.1003 12.8297 2.10031 14.0248 3.01427L20.6915 8.11231C21.5162 8.74299 22 9.72194 22 10.7602ZM11.8889 11.1523H12.1111C13.768 11.1523 15.1111 12.4954 15.1111 14.1523V17.7078C15.1111 19.3647 13.768 20.7078 12.1111 20.7078H11.8889C10.232 20.7078 8.88889 19.3647 8.88889 17.7078V14.1523C8.88889 12.4954 10.232 11.1523 11.8889 11.1523ZM13.1111 14.1523C13.1111 13.6 12.6634 13.1523 12.1111 13.1523H11.8889C11.3366 13.1523 10.8889 13.6 10.8889 14.1523V17.7078C10.8889 18.2601 11.3366 18.7078 11.8889 18.7078H12.1111C12.6634 18.7078 13.1111 18.2601 13.1111 17.7078V14.1523Z" fill="#211e1e"></path> </g></svg>
              <p>Dashboard</p>
            </div>
            <div className="nav-link-container">
              <svg className='svg-clr' width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6.41421 7H9V4.41421L6.41421 7ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z" fill="#211e1e"></path> </g></svg>
              <p>Semantic Search</p>
            </div>
          </div>
          <div className='nav-middle'>

            <p>Logo</p>

          </div>
          <div className='nav-right'>
            <div className="nav-link-container">
              <svg className='svg-clr-2' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 10C9 9.40666 9.17595 8.82664 9.50559 8.33329C9.83524 7.83994 10.3038 7.45543 10.852 7.22836C11.4001 7.0013 12.0033 6.94189 12.5853 7.05765C13.1672 7.1734 13.7018 7.45912 14.1213 7.87868C14.5409 8.29824 14.8266 8.83279 14.9424 9.41473C15.0581 9.99667 14.9987 10.5999 14.7716 11.1481C14.5446 11.6962 14.1601 12.1648 13.6667 12.4944C13.1734 12.8241 12.5933 13 12 13V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#211e1e" stroke-width="1.9440000000000002" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="17" r="1" fill="#211e1e"></circle> </g></svg>
              <p>Support</p>
            </div>
            <div className="nav-link-container">
              <svg className='svg-clr-2' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="User / User_03"> <path id="Vector" d="M18 19C18 16.7909 15.3137 15 12 15C8.68629 15 6 16.7909 6 19M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z" stroke="#211e1e" stroke-width="2.112" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              <p>Account</p>
            </div>
            <div className="theme-icon-container">
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
