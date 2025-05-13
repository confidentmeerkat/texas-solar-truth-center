
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AuthorInfo = () => {
  return (
    <div className="bg-bennett-lightBlue p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center md:items-start">
      <div className="flex-shrink-0">
        <Avatar className="w-24 h-24 bg-bennett-navy">
          <AvatarFallback className="text-2xl text-white font-serif">CB</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">Charles Bennett, Esq.</h3>
          <p className="text-sm text-bennett-slate mb-3">Consumer Protection Attorney</p>
        </div>
        <p className="text-sm text-bennett-slate">
          Charles Bennett is the founding attorney of Bennett Legal with over 20 years of experience in consumer protection law. He has successfully represented hundreds of clients in cases involving deceptive business practices, with a special focus on renewable energy fraud cases in Texas. Charles is a graduate of the University of Texas School of Law and is committed to protecting the rights of Texas consumers against predatory practices.
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
