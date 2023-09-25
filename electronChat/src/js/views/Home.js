import React, { useEffect } from "react";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";

import { useDispatch, useSelector } from "react-redux";

import { fetchChats } from "../actions/chats";
import JoinedChatsList from "../components/JoinedChatList";
import BaseLayout, { withBaseLayout } from "../layouts/Base";
import Notification from "../utils/notifications";
import {Link} from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);

  useEffect(() => {
    Notification.setup();
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList chats={chats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text="Choose your channel">
          <Link className={'btn btn-outline-primary btn-sm'} to={'chatCreate'}>New</Link>
        </ViewTitle>

        <AvailableChatsList chats={chats} />
      </div>
    </div>
  );
}

export default withBaseLayout(Home);
