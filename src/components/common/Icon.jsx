import { iconMap } from "../../utils/iconMap";

export default function Icon({ name, size = 22, className = "" }) {
  const Component = iconMap[name] || iconMap.Layout;
  return <Component size={size} className={className} aria-hidden="true" />;
}
