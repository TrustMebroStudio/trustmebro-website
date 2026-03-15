import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M22 12.002C22 9.652 21.739 8.175 21.485 7.35C21.26 6.617 20.683 6.04 19.95 5.815C19.125 5.561 17.648 5.3 15.298 5.3H8.702C6.352 5.3 4.875 5.561 4.05 5.815C3.317 6.04 2.74 6.617 2.515 7.35C2.261 8.175 2 9.652 2 12.002C2 14.352 2.261 15.829 2.515 16.654C2.74 17.387 3.317 17.964 4.05 18.189C4.875 18.443 6.352 18.704 8.702 18.704H15.298C17.648 18.704 19.125 18.443 19.95 18.189C20.683 17.964 21.26 17.387 21.485 16.654C21.739 15.829 22 14.352 22 12.002Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10 9.4V14.6L14.8 12L10 9.4Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M4 4L10.9 13.2L4.2 20H6.9L12.1 14.7L16 20H20L12.8 10.3L19.1 4H16.4L11.7 8.8L8.2 4H4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M8 6.6C9 6.1 10 5.8 11 5.7L11.4 6.5C10.2 6.7 9.1 7.1 8.2 7.7C9.2 7.2 10.4 6.9 11.6 6.8C13 6.7 14.4 6.9 15.7 7.4C14.5 6.7 13.1 6.2 11.6 6.1L12 5.3C13.2 5.4 14.4 5.8 15.5 6.4C17.2 8.8 18 11.2 18 13.5C17 14.6 15.8 15.4 14.5 16L13.8 14.9C14.6 14.6 15.4 14.1 16 13.6C14.7 14.3 13.3 14.7 11.8 14.8C10.2 14.9 8.7 14.6 7.4 13.9C8 14.4 8.8 14.8 9.7 15.1L9 16.2C7.7 15.7 6.5 14.9 5.5 13.8C5.5 11.5 6.3 9 8 6.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="9.7" cy="11.7" r="1" fill="currentColor" />
      <circle cx="14.3" cy="11.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function SteamIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-10", className)}
    >
      <circle cx="12" cy="12" r="10.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15.6" cy="8.4" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9.2" cy="14.8" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10.8 13.8L13.9 10.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
