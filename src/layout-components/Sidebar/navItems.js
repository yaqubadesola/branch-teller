import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  AccountBalanceOutlinedIcon: AccountBalanceOutlinedIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'NAVIGATION MENU ',
    content: JSON.parse(
      `[
      {
        "label": "Branch Module",
        "icon": "AccountBalanceOutlinedIcon",
        "content": [
          {
            "label": "New Investment",
            "description": "This is a dashboard page example built using this template.",
            "to": "/DashboardDefault",
            "icon": "AccountBalanceOutlinedIcon"
          },
          {
            "label": "Liquidate Investment",
            "description": "This is a Liquidate page example built using this template.",
            "to": "/DashboardDefault",
            "icon": "AccountBalanceOutlinedIcon"
          },
          {
            "label": "View all Investment",
            "description": "This is a dashboard page example built using this template.",
            "to": "/DashboardDefault",
            "icon": "AccountBalanceOutlinedIcon"
          },
          {
            "label": "Manage Investment",
            "description": "This is a dashboard page example built using this template.",
            "to": "/DashboardDefault",
            "icon": "AccountBalanceOutlinedIcon"
          }
        ]
      }
    ]`,
      (key, value) => {
          if (key === 'icon') {
            return iconsMap[value];
          } else {
            return value;
          }
        }
      )   
  }
];
