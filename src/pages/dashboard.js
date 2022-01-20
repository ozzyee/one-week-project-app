import FormList from "../Components/FormList/index.js";
import "../Style/dashboard.css";

function Dashboard() {
  const mockForms = [
    {
      key: 1,
      formid: 1,
      formtitle: "Content Feedback",
      date: "18/01/22",
      userid: "hggvhnv7rer",
      iscompleted: true,
      synopsis: "",
      url: "www.bbc.com",
    },

    {
      key: 2,
      formid: 2,
      formtitle: "Content Feedback",
      date: "17/01/22",
      userid: "hggvhnv7rer",
      iscompleted: false,
      synopsis: "",
      url: "www.bbc.com/1",
    },

    {
      key: 3,
      formid: 3,
      formtitle: "Content Feedback",
      date: "16/01/22",
      userid: "qwerty123",
      iscompleted: true,
      synopsis: "",
      url: "www.bbc.com",
    },
  ];

  const completedMockForms = mockForms.filter(function (item) {
    return item.iscompleted === true;
  });

  const unCompletedMockForms = mockForms.filter(function (item) {
    return item.iscompleted === false;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img
          className="logo-soc"
          src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt="School of Code Logo"
        />
        <h1 className="dashboard-h1">Welcome LuScOz</h1>
      </div>
      <h2 className="dashboard-h2">Forms To-Do</h2>
      <FormList forms={unCompletedMockForms} />
      <h2 className="dashboard-h2">Completed Forms</h2>
      <FormList forms={completedMockForms} />
    </div>
  );
}

export default Dashboard;
