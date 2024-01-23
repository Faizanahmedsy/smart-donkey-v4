//TODO: add sidebar and topmenu in this component

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="h-screen bg-slate-800">{children}</div>
    </div>
  );
};

export default AdminLayout;
