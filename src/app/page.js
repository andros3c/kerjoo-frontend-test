"use client";

import { Provider } from "react-redux";
import { SearchField } from "./pageComponents/SearchField";
import { TextArea } from "./pageComponents/TextArea";
import PostContent from "./pageComponents/PostContent";
import store from "./store";

const Home = () => {
  return (
    <div className="flex w-3/5  h-screen flex-col gap-4 mt-8">
      <Provider store={store}>
        <SearchField />
        <TextArea />
        <PostContent />
      </Provider>
    </div>
  );
};
export default Home;
