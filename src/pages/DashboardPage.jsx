import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export default function DashboardPage() {
  useLogOutRedirect();
  return <div>DashboardPage</div>;
}
