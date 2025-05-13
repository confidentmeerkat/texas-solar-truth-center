
import React from 'react';

const AuthorInfo = () => {
  return (
    <div className="bg-bennett-lightBlue p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center md:items-start">
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-bennett-navy flex items-center justify-center">
          <span className="text-2xl text-white font-serif">JB</span>
        </div>
      </div>
      <div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">James Bennett, Esq.</h3>
          <p className="text-sm text-bennett-slate mb-3">Consumer Protection Attorney</p>
        </div>
        <p className="text-sm text-bennett-slate">
          James Bennett is the founding attorney of Bennett Legal with over 15 years of experience in consumer protection law. He has successfully represented hundreds of clients in cases involving deceptive business practices, with a recent focus on emerging issues in renewable energy fraud. James is a graduate of the University of Texas School of Law and is committed to protecting the rights of Texas consumers.
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
