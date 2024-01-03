import { Layout } from "@douyinfe/semi-ui";
import { RiChatSmile3Line, RiDashboardLine } from "@remixicon/react";
const { Sider } = Layout;

function MenuButton({ title, icon, actived, onClick }) {
  return (
    <div
      className={`${actived && "text-primary"} flex flex-col justify-center items-center cursor-pointer mt-5 mb-5`}
      onClick={onClick}>
      <div className="w-6 h-6">{icon}</div>
      <div className="mt-1 text-sm">{title}</div>
    </div>
  );
}

export default function Sidebar({ onPageChanged, currentIndex }) {
  const menus = [
    {
      title: "概览",
      icon: <RiDashboardLine />,
    },
    {
      title: "聊天",
      icon: <RiChatSmile3Line />,
    },
  ];
  return (
    <Sider className="w-16 h-screen shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
      {menus.map(({ title, icon }, index) => (
        <MenuButton
          key={title}
          title={title}
          icon={icon}
          actived={currentIndex === index}
          onClick={() => onPageChanged(index)}
        />
      ))}
    </Sider>
  );
}