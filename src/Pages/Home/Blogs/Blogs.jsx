import React from "react";
import useTitle from "../../../hooks/useTitile";

const Blogs = () => {
  useTitle("blogs");
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">Toy Blogs</h3>
      </div>

      <div>
        <div className="w-full px-8 mx-auto my-10 space-y-2 shadow lg:max-w-2xl">
          <details className="p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                An access token is a short-lived token that is used to access
                protected resources. Access tokens are typically generated by an
                authorization server and are passed to the third-party
                application by the user. Access tokens are typically used to
                access resources for a limited period of time, such as 30
                minutes or an hour. A refresh token is a long-lived token that
                can be used to obtain new access tokens. Refresh tokens are not
                passed to the third-party application by the user. Instead, they
                are stored by the third-party application in a secure location.
                Refresh tokens can be used to obtain new access tokens when the
                old access token expires. Access tokens and refresh tokens
                should be stored securely on the client-side. The best way to
                store access tokens and refresh tokens is to use a secure
                storage mechanism, such as a browser's local storage or a secure
                cookie.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Compare SQL and NoSQL databases?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-bold">SQL databases:</span> Use structured
                query language (SQL) to store and retrieve data. Have a
                predefined schema, which is a set of rules that define the
                structure of the data. Are good for storing and retrieving
                structured data, such as customer information or product
                inventory. Are typically used in applications that require
                complex queries and transaction management. <b></b>
                <span className="font-bold">NoSQL databases</span>
                Do not use SQL to store and retrieve data. Have a dynamic
                schema, which means that the structure of the data can change
                over time. Are good for storing and retrieving unstructured
                data, such as social media data or sensor data. Are typically
                used in applications that require high performance and
                scalability.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              What is express js? What is Nest JS?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-bold">Express</span> is a minimal
                framework that provides a routing layer and a few other basic
                features. It is often used as a starting point for building web
                applications, as it allows developers to have complete control
                over the application's architecture.
                <br />
                <span className="font-bold">Nest</span> is a more opinionated
                framework that provides a number of features out of the box,
                such as dependency injection, routing, and authentication. It is
                built on top of Express, so it can be used to build both simple
                and complex web applications.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              What is MongoDB aggregate and how does it work?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                MongoDB aggregation is a process of transforming data from a
                collection into a desired format. It is used to perform complex
                operations on data, such as grouping, sorting, and calculating
                aggregates.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
