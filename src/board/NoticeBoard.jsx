import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import NoticeEdit from "./NoticeEdit";
import NoticeInsert from "./NoticeInsert";
import NoticeList from "./NoticeList";
import NoticeTemplate from "./NoticeTemplate";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const nextId = useRef(4);

  const onInsert = async (text) => {
    const data = await axios.post(`http://localhost:4000/notices/`, { text });
    setNotices(data.data);
    // setNotices((notices) => notices.concat(todo));

    nextId.current++;
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onRemove = async (id) => {
    // setNotices((notices) => notices.filter((todo) => todo.id !== id));
    try {
      await axios({
        url: `http://localhost:4000/notices/${id}`,
        method: "DELETE",
      });
      const data = await axios({
        url: `http://localhost:4000/notices`,
        method: "GET",
      });
      setNotices(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/notices/check/${id}`,
        method: "PATCH",
      });
      setNotices(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onUpdate = async (id, text) => {
    // setNotices((notices) =>
    //   notices.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    // );
    try {
      const data = await axios({
        url: `http://localhost:4000/notices/${id}`,
        method: "PATCH",
        data: {
          text,
          perform_date: "2022-08-09 11:11:11",
        },
      });
      setNotices(data.data);
    } catch (e) {
      setError(e);
    }
    onInsertToggle();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/notices",
          method: "GET",
        });

        setNotices(data.data);
        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };

    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <NoticeTemplate>
      {/* <NoticeInsert onInsert={onInsert} /> */}
      <NoticeList
        notices={notices}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedNotice={setSelectedNotice}
      />
      {insertToggle && (
        <NoticeEdit
          onInsertToggle={onInsertToggle}
          selectedNotice={selectedNotice}
          onUpdate={onUpdate}
        />
      )}
    </NoticeTemplate>
  );
};

export default NoticeBoard;
