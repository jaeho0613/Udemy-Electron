import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatUserList from '../components/ChatUsersList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';
import { withBaseLayout } from '../layouts/Base';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToChat } from '../actions/chats';

function Chat() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeChat = useSelector(({ chats }) => chats.activeChats[id]);

  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id));
    return () => {
      if (unsubFromChat) {
        unsubFromChat();
      }
    };
  }, []);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList users={activeChat?.joinedUsers} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`channel: ${activeChat?.name}`} />
        <ChatMessagesList />
      </div>
    </div>
  );
}

export default withBaseLayout(Chat, { canGoBack: true });
