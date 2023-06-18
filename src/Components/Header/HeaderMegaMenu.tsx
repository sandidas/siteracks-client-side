import { createStyles, Header, HoverCard, Group, Button, UnstyledButton, Text, SimpleGrid, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SwitchDarkLight from "./SwitchDarkLight";

import { ChatBubbleLeftRightIcon, ChevronDownIcon, UserIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import LiveChatIcon from "../../../public/images/nav/LiveChatIcon.svg";

import Link from "next/link";

import { websiteMenuItems, hostingMenuItems, domainMenuItems, securityMenuItems, helpMenuItems, aboutMenuItems, tosMenuItems } from "../Data/MenuData";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
      borderRadius: "5px",
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("lg")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("lg")]: {
      display: "none",
    },
  },
}));

// const hostingMenuItems = [
//   {
//     icon: WebHosting,
//     title: "Web Hosting",
//     description: "Scalable, reliable and secure cloud hosting compared to traditional hosting.",
//     linkUrl: "web-hosting",
//   },
//   {
//     icon: WordPressHosting,
//     title: "WordPress Hosting",
//     description: "Specialized features, tools, performance and security optimized for WordPress",
//     linkUrl: "wordpress-hosting",
//   },
//   {
//     icon: BusinessHosting,
//     title: "Business Hosting",
//     description: "Features and resources that needs of online businesses, such as high uptime.",
//     linkUrl: "business-hosting",
//   },
//   {
//     icon: preManagedVpsHosting,
//     title: "pre-Managed VPS Hosting Light",
//     description: "Offers dedicated resources and complete management services.",
//     linkUrl: "pre-managed-vps-hosting-light",
//   },
//   {
//     icon: ResellerHosting,
//     title: "Reseller Hosting",
//     description: "Build your hosting business empire with SiteRacks reseller hosting.",
//     linkUrl: "reseller-hosting",
//   },
// ];

// const domainMenuItems = [
//   {
//     icon: RegisterDomain,
//     title: "Register a New Domain",
//     description: "This Pokémon’s cry is very loud and distracting",
//     linkUrl: "register-domain",
//   },
//   {
//     icon: TransferDomain,
//     title: "Transfer Domain To Us",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "transfer-domain",
//   },
//   {
//     icon: SiteLockCertificate,
//     title: "Privacy & Protection for Domains",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "privacy-protection-for-domains",
//   },
//   {
//     icon: RegisterDomain,
//     title: "WHOIS",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "domain-whois",
//   },
// ];

// const websiteMenuItems = [
//   {
//     icon: WordPressHosting,
//     title: "WordPress Website Design",
//     description: "This Pokémon’s cry is very loud and distracting",
//     linkUrl: "wordpress-website-design",
//   },
//   {
//     icon: CustomWebsiteDevelopment,
//     title: "Custom Website Development",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "custom-website-development",
//   },
// ];

// const securityMenuItems = [
//   {
//     icon: WebsiteBackup,
//     title: "Website Backups",
//     description: "This Pokémon’s cry is very loud and distracting",
//     linkUrl: "website-backup",
//   },
//   {
//     icon: SslCertificates,
//     title: "SSL Certificates",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "ssl-certificates",
//   },
//   {
//     icon: SiteLockCertificate,
//     title: "SiteLock Certificates",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "siteLock-certificates",
//   },
//   {
//     icon: WildCardCertificate,
//     title: "Wildcard SSL",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "wildcard-certificates",
//   },
// ];

// const helpMenuItems = [
//   // {
//   //   icon: BlogsIcon,
//   //   title: "Blogs",
//   //   description: "This Pokémon’s cry is very loud and distracting",
//   //   linkUrl: "blogs",
//   // },
//   {
//     icon: OpenSupportTicket,
//     title: "Open Support Ticket",
//     description: "The fluid of Smeargle’s tail secretions changes",
//     linkUrl: "open-support-ticket",
//   },
//   // {
//   //   icon: KnowledgeBase,
//   //   title: "Knowledge Base",
//   //   description: "The fluid of Smeargle’s tail secretions changes",
//   //   linkUrl: "knowldege-base",
//   // },
// ];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [domainLinksOpened, { toggle: toggleDomainLinks }] = useDisclosure(false);
  const [websiteLinksOpened, { toggle: toggleWebsiteLinks }] = useDisclosure(false);
  const [securityLinksOpened, { toggle: toggleSecurityLinks }] = useDisclosure(false);
  const [helpLinksOpened, { toggle: toggleHelpLinks }] = useDisclosure(false);
  const largeScreen = useMediaQuery("(min-width: 900px)");
  const { classes, theme } = useStyles();

  const webHostingLinks = hostingMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link onClick={closeDrawer} className="px-3 py-0 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col" href={item.linkUrl}>
          <div>
            <item.icon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
          </div>

          <div>
            <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ));
  // Domain menu Item for desktop
  const domainLinks = domainMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link onClick={closeDrawer} className="px-3 py-0 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            {/* <Image src={item.icon} alt="me" width="50" height="50" /> */}
            <item.icon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
          </div>

          <div>
            <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ));
  // website menu Item for desktop

  const websiteLinks = websiteMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link onClick={closeDrawer} className="px-3 py-0 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            {/* <Image src={item.icon} alt="me" width="50" height="50" /> */}
            <item.icon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
          </div>

          <div>
            <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  // security menu Item for desktop
  const securityLinks = securityMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link onClick={closeDrawer} className="px-3 py-0 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            {/* <Image src={item.icon} alt="me" width="50" height="50" /> */}
            <item.icon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
          </div>

          <div>
            <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  // help menu Item for desktop
  const helpLinks = helpMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link onClick={closeDrawer} className="px-3 py-0 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            {/* <Image src={item.icon} alt="me" width="50" height="50" /> */}
            <item.icon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
          </div>

          <div>
            <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={0}>
      {/* {menuItems.map((item:any) =>(
        "s"
      ))      } */}
      <Header fixed={true} height={60} px="md" className="border-none px-5 max-w-screen-2xl mx-auto">
        <Group position="apart" spacing={"xs"} sx={{ height: "100%" }}>
          {/* burger icon for mobile */}

          {/* MOBILE  */}
          <Group spacing="xs" className={`w-full flex justify-between xl:hidden`}>
            <div className="flex items-center gap-1">
              <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />

              <Link href="/" className="flex">
                <Logo />
              </Link>
            </div>

            <SwitchDarkLight />
          </Group>

          {/* DESKTOP  */}
          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/" className="flex">
              <Logo />
            </Link>
          </Group>

          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            {/* <a href="#" className={classes.link}></a> */}

            {/* hosting menu items  */}

            <HoverCard width={900} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5} className="font-bold">
                      HOSTING
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Features</Text>
                  <Anchor href="#" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

                <SimpleGrid cols={3} spacing={0}>
                  {webHostingLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Confused? You can ask an expert to help.
                      </Text>
                    </div>
                    <Button
                      onClick={() => {
                        Tawk_API.toggle();
                      }}
                      variant="default"
                    >
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* domain menu items  */}

            <HoverCard width={700} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5} className="font-bold">
                      DOMAIN
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <SimpleGrid cols={2} spacing={0}>
                  {domainLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Website menu items  */}

            {/* <HoverCard width={700} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5} className="font-bold">
                      WEBSITE
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <SimpleGrid cols={2} spacing={0}>
                  {websiteLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard> */}

            {/* Security menu items  */}

            <HoverCard width={900} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5} className="font-bold">
                      SECURITY
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <SimpleGrid cols={3} spacing={0}>
                  {securityLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Help menu items  */}

            <HoverCard width={1000} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5} className="font-bold">
                      HELP
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <SimpleGrid cols={3} spacing={0}>
                  {helpLinks}
                  {/* Custom Live Chat */}
                  <UnstyledButton
                    onClick={() => {
                      Tawk_API.toggle();
                      closeDrawer;
                    }}
                    className="px-3 py-0 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col hover:dark:bg-gray-900 hover:bg-gray-100"
                  >
                    {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
                    <div>
                      {/* <Image src={item.icon} alt="me" width="50" height="50" /> */}
                      <LiveChatIcon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
                    </div>

                    <div>
                      <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
                        Live Chat
                      </Text>
                      <Text size="xs" color="dimmed">
                        Customer support service that allows our website users to chat in real-time with a customer support agent to receive assistance or support.
                      </Text>
                    </div>
                  </UnstyledButton>
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="/affiliate" className={`${classes.link} uppercase font-bold`}>
              Affiliate
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <SwitchDarkLight />
            <Button size="md" variant="outline" leftIcon={<UserIcon className="h-5 w-5 fill-primary" />} component="a" href={`${process.env.BILLING_URL}index.php?rp=/login`}>
              Account
            </Button>
          </Group>
        </Group>
      </Header>

      <Drawer opened={drawerOpened} position="top" onClose={closeDrawer} size="100%" padding="md" title={<Logo />} className={classes.hiddenDesktop} zIndex={1000000} transition="slide-up" transitionDuration={500} transitionTimingFunction="ease-in">
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          {/* <a href="#" className={classes.link}>
            HOME
          </a> */}

          <UnstyledButton className={`${classes.link} w-full`} py={40} onClick={toggleLinks}>
            <Center className="w-full justify-between group px-2">
              <Box component="span" mr={5} fz="lg">
                HOSTING
              </Box>

              <ChevronDownIcon className={`h-5 w-5 lg:h-7 lg:w-7 text-primary ${linksOpened && "rotate-90"}`} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{webHostingLinks}</Collapse>

          {/* // domain items  */}
          <UnstyledButton className={`${classes.link} w-full`} py={40} onClick={toggleDomainLinks}>
            <Center className="w-full justify-between group px-2">
              <Box component="span" mr={5} fz="lg">
                DOMAIN
              </Box>
              <ChevronDownIcon className={`h-5 w-5 lg:h-7 lg:w-7 text-primary ${domainLinksOpened && "rotate-90"}`} />
            </Center>
          </UnstyledButton>
          <Collapse in={domainLinksOpened}>{domainLinks}</Collapse>

          {/* website items  */}
          {/* <UnstyledButton className={`${classes.link} w-full`} py={40} onClick={toggleWebsiteLinks}>
            <Center className="w-full justify-between group px-2">
              <Box component="span" mr={5} fz="lg">
                WEBSITE
              </Box>
              <ChevronDownIcon className={`h-5 w-5 lg:h-7 lg:w-7 text-primary ${websiteLinksOpened && "rotate-90"}`} />
            </Center>
          </UnstyledButton>
          <Collapse in={websiteLinksOpened}>{websiteLinks}</Collapse> */}

          {/* security items  */}
          <UnstyledButton className={`${classes.link} w-full`} py={40} onClick={toggleSecurityLinks}>
            <Center className="w-full justify-between group px-2">
              <Box component="span" mr={5} fz="lg">
                SECURITY
              </Box>
              <ChevronDownIcon className={`h-5 w-5 lg:h-7 lg:w-7 text-primary ${securityLinksOpened && "rotate-90"}`} />
            </Center>
          </UnstyledButton>
          <Collapse in={securityLinksOpened}>{securityLinks}</Collapse>

          {/* help items  */}
          <UnstyledButton className={`${classes.link} w-full`} py={40} onClick={toggleHelpLinks}>
            <Center className="w-full justify-between group px-2">
              <Box component="span" mr={5} fz="lg">
                HELP
              </Box>
              <ChevronDownIcon className={`h-5 w-5 lg:h-7 lg:w-7 text-primary ${helpLinksOpened && "rotate-90"}`} />
            </Center>
          </UnstyledButton>
          <Collapse in={helpLinksOpened}>
            {helpLinks}

            <UnstyledButton
              onClick={() => {
                Tawk_API.toggle();
                closeDrawer;
              }}
              className="px-10 py-5 xl:p-5 space-y-0 xl:space-y-2 no-underline flex xl:flex-col hover:dark:bg-gray-900 hover:bg-gray-100"
            >
              {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
              <div>
                {/* <Image src={item.icon} alt="me" width="50" height="50" /> */}
                <LiveChatIcon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" />
              </div>

              <div>
                <Text size={largeScreen ? "xl" : "md"} weight={600} className="dark:text-slate-200">
                  Live Chat
                </Text>
                <Text size="xs" color="dimmed">
                  Customer support service that allows our website users to chat in real-time with a customer support agent to receive assistance or support.
                </Text>
              </div>
            </UnstyledButton>
          </Collapse>

          <Link onClick={closeDrawer} href="/affiliate" className={`${classes.link} uppercase font-medium w-full py-10 text-xl ml-2`}>
            Affiliate
          </Link>

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Group position="center" grow pb="xl" px="md">
            <Button component="a" href={`${process.env.BILLING_URL}`} size="xl">
              Log in
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;
