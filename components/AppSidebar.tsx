import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import TestSvg from "./ui/testSvg";
import CandidatesSvg from "./ui/CandidatesSvg";
import SettingsSvg from "./ui/SettingsSvg";
import CampaginSvg from "./ui/CampaignSvg";
import ControlPanelSvg from "./ui/ControlPanelSvg";
import LogoutSvg from "./ui/LogoutSvg";

const AppSidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      title: "لوحة التحكم",
      url: "#",
      icon: ControlPanelSvg,
    },
    {
      id: 2,
      title: "الحملات",
      url: "#",
      icon: CampaginSvg,
    },
    {
      id: 3,
      title: "المرشّحون",
      url: "#",
      icon: CandidatesSvg,
    },
    {
      id: 4,
      title: "الإعدادات",
      url: "#",
      icon: SettingsSvg,
    },
    {
      id: 5,
      title: "المساعدة والدعم",
      url: "#",
      icon: ControlPanelSvg,
    },
  ];
  return (
    <Sidebar side="right" className="bg-[#FFFFFF]">
      {/* Parent container for header and content */}
      <div className="flex justify-center">
        <div>
          <SidebarHeader className="mt-10 mb-5">
            <TestSvg />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarContent>
                <SidebarMenu className="flex flex-col gap-5">
                  {/* here we will loop over the array to get all the menu items  */}
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem
                      key={item.id}
                      style={{ padding: "0.938rem" }}
                      //   on hover below
                      className="rounded-[10px] max-w-[15.625rem] hover:bg-[#E0ECFF]"
                    >
                      <SidebarMenuButton className="">
                        <a
                          href={item.url}
                          className="flex items-center gap-4 w-[15.625rem]"
                        >
                          <item.icon />
                          <span className="font-medium text-base leading-[120%]">
                            {item.title}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
      </div>
      <SidebarFooter>
        <div className="flex items-center gap-3 mr-[1.356rem]">
          <LogoutSvg />
          <button className="text-base">تسجيل الخروج </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
