'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const items = [
    {
      title: 'Introduction & Getting Started',
      href: '/docs',
    },
    {
      title: 'Installation',
      href: '/docs/install',
    },
    {
      title: 'Changelog',
      href: '/docs/changelog',
    },
  ];

  const currentIndex = items.findIndex((item) => item.href === pathname);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <SidebarProvider>
      <Sidebar className="pt-14 border-r border-border/60">
        <SidebarContent>
          <SidebarGroup className="pt-6 px-2">
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground px-2 mb-1">
              Documentation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        render={<Link href={item.href} />}
                        isActive={isActive}
                        className={cn(
                          'w-full justify-start text-sm font-medium px-3 py-2 rounded-lg transition-colors',
                          isActive
                            ? 'bg-accent/10 text-accent'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        )}
                      >
                        {item.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="flex-1 w-full min-w-0">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/60 md:hidden">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Documentation</span>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-14">{children}</div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 pb-14">
          <div className="border-t border-border/60 pt-6">
            <div className="flex items-center gap-4">
              {prevItem ? (
                <Link
                  href={prevItem.href}
                  className="group flex-1 flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-colors hover:border-border hover:bg-muted/30"
                >
                  <ArrowLeft
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Previous</span>
                    <span className="text-sm font-semibold text-foreground">{prevItem.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextItem ? (
                <Link
                  href={nextItem.href}
                  className="group flex-1 flex items-center justify-end gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-colors hover:border-border hover:bg-muted/30"
                >
                  <div className="flex flex-col text-right">
                    <span className="text-xs text-muted-foreground">Next</span>
                    <span className="text-sm font-semibold text-foreground">{nextItem.title}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
