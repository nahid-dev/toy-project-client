import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CountUp from "react-countup";

const ExtraSection01 = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="main-container">
      <div className="stats stats-vertical lg:stats-horizontal shadow-xl mt-20 w-full text-center">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value flex justify-center">
            <CountUp start={0} end={31} delay={0} duration={8}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            K
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">
            <CountUp start={3000} end={4200} delay={0} duration={8}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">
            <CountUp start={0} end={1200} delay={0} duration={8}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                {user && <img src={user?.photoURL} />}
              </div>
            </div>
          </div>
          <div className="stat-value flex justify-center">
            <CountUp start={0} end={86} delay={0} duration={8}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            %
          </div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection01;
