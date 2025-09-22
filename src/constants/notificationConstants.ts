import { BugIcon, NewUserIcon, SubscribedIcon } from "../components/Icons";

// Icon mapping for type safety
export const NOTIFICATION_ICONS = {
    bug: BugIcon,
    user: NewUserIcon,
    subscription: SubscribedIcon,
} as const;

// Notification types for type safety
export type NotificationType = keyof typeof NOTIFICATION_ICONS;

// Notifications data without JSX (components will render icons)
export const NOTIFICATIONS = [
    {
        id: 1,
        type: "bug" as const,
        message: "You have a bug that needs...",
        time: "Just now",
    },
    {
        id: 2,
        type: "user" as const,
        message: "New user registered",
        time: "59 minutes ago",
    },
    {
        id: 3,
        type: "bug" as const,
        message: "You have a bug that needs...",
        time: "12 hours ago",
    },
    {
        id: 4,
        type: "subscription" as const,
        message: "Andi Lane subscribed to you",
        time: "Today, 11:59 AM",
    },
];

// Activities data
export const ACTIVITIES = [
    {
        id: 1,
        message: "You have a bug that needs...",
        time: "Just now",
        avatar: "/3D05.png",
    },
    {
        id: 2,
        message: "Released a new version",
        time: "59 minutes ago",
        avatar: "/Female05.png",
    },
    {
        id: 3,
        message: "Submitted a bug",
        time: "12 hours ago",
        avatar: "/3D08.png",
    },
    {
        id: 4,
        message: "Modified A data in Page X",
        time: "Today, 11:59 AM",
        avatar: "/Male07.png",
    },
    {
        id: 5,
        message: "Deleted a page in Project X",
        time: "Feb 2, 2023",
        avatar: "/Male11.png",
    }
];

// Contacts data
export const CONTACTS = [
    { id: 1, name: "Natali Craig", avatar: "/Female15.png" },
    { id: 2, name: "Drew Cano", avatar: "/Male08.png" },
    { id: 3, name: "Orlando Diggs", avatar: "/Male06.png" },
    { id: 4, name: "Andi Lane", avatar: "/Female05.png" },
    { id: 5, name: "Kate Morrison", avatar: "/Female09.png" },
    { id: 6, name: "Koray Okumus", avatar: "/Male07.png" },
];