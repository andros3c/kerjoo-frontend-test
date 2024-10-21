"use client";

import { Provider } from "react-redux";
import { TextArea } from "./pageComponents/TextArea";
import PostContent from "./pageComponents/PostContent";
import store from "./store";

const Home = () => {
  return (
    <div className="flex w-3/5  h-screen flex-col gap-4 mt-20">
      <Provider store={store}>
        <TextArea />
        <PostContent />
      </Provider>
    </div>
  );
};
export default Home;
