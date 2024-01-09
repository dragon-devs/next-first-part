import React from 'react';

const Register = () => {
  return (
      <div className="flex items-center justify-center">
        <div className="artboard-demo mt-10 py-10 px-7">
          <h1 className="mb-5 uppercase">Sign up</h1>
          <form action="" className="grid space-y-5 place-content-center">
            <input type="text" placeholder="Name" className=" input input-sm input-bordered w-full max-w-md"/>
            <input type="email" placeholder="Email" className=" input input-sm input-bordered w-full max-w-md"/>
            <input type="password" placeholder="Password" className="input input-sm input-bordered w-full max-w-md"/>
            <br/>
            <input type="submit" value="Signup" className="btn btn-sm btn-primary"/>
          </form>
        </div>
      </div>
  );
};

export default Register;
