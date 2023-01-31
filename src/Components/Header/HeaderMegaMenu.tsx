import { createStyles, Header, HoverCard, Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, ChevronIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SwitchDarkLight from "./SwitchDarkLight";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import BlogsIcon from "../../../public/images/nav/blogs.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";
import CustomWebsiteDevelopment from "../../../public/images/nav/customWebsiteDevelopment.svg";
import ForgetPassword from "../../../public/images/nav/forgetPassword.svg";
import KnowledgeBase from "../../../public/images/nav/knowledgeBase.svg";
import Login from "../../../public/images/nav/login.svg";
import OpenSupportTicket from "../../../public/images/nav/openSupportTicket.svg";
import preManagedVpsHosting from "../../../public/images/nav/preManagedVpsHosting.svg";
import RegisterDomain from "../../../public/images/nav/registerDomain.svg";
import ResellerHosting from "../../../public/images/nav/resellerHosting.svg";
import SiteLockCertificate from "../../../public/images/nav/sitelockCertificate.svg";
import SslCertificates from "../../../public/images/nav/sslCertificates.svg";
import TransferDomain from "../../../public/images/nav/transferDomain.svg";
import WebHosting from "../../../public/images/nav/webHosting.svg";
import WebsiteBackup from "../../../public/images/nav/websiteBackup.svg";
import WildCardCertificate from "../../../public/images/nav/wildCardCertificate.svg";
import WordPressHosting from "../../../public/images/nav/wordPressHosting.svg";
import Link from "next/link";
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
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
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
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const hostingMenuItems = [
  {
    icon: WebHosting,
    title: "Web Hosting",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "web-hosting",
  },
  {
    icon: WordPressHosting,
    title: "WordPress Hosting",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
  {
    icon: BusinessHosting,
    title: "Business Hosting",
    description: "Yanma is capable of seeing 360 degrees without",
    linkUrl: "business-hosting",
  },
  {
    icon: preManagedVpsHosting,
    title: "pre-Managed VPS Hosting",
    description: "The shell’s rounded shape and the grooves on its.",
    linkUrl: "pre-managed-hosting",
  },
  {
    icon: ResellerHosting,
    title: "Reseller Hosting",
    description: "This Pokémon uses its flying ability to quickly chase",
    linkUrl: "reseller-hosting",
  },
];

const domainMenuItems = [
  {
    icon: RegisterDomain,
    title: "Register a New Domain",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "web-hosting",
  },
  {
    icon: TransferDomain,
    title: "Transfer Domain To Us",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
  {
    icon: SiteLockCertificate,
    title: "Privacy & Protection for Domains",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "privacy-protection-for-domains",
  },
  {
    icon: RegisterDomain,
    title: "WHOIS",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "privacy-protection-for-domains",
  },
];

const websiteMenuItems = [
  {
    icon: WordPressHosting,
    title: "WordPress Website Design",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "web-hosting",
  },
  {
    icon: CustomWebsiteDevelopment,
    title: "Custom Website Development",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
];

const securityMenuItems = [
  {
    icon: WebsiteBackup,
    title: "Website Backups",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "web-hosting",
  },
  {
    icon: SslCertificates,
    title: "SSL Certificates",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
  {
    icon: SiteLockCertificate,
    title: "SiteLock Certificates",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
  {
    icon: WildCardCertificate,
    title: "Wildcard SSL",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
];

const helpMenuItems = [
  {
    icon: BlogsIcon,
    title: "Blogs",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "web-hosting",
  },
  {
    icon: OpenSupportTicket,
    title: "Open Support Ticket",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
  {
    icon: KnowledgeBase,
    title: "Knowledge Base",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wordpress-hosting",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [domainLinksOpened, { toggle: toggleDomainLinks }] = useDisclosure(false);
  const [websiteLinksOpened, { toggle: toggleWebsiteLinks }] = useDisclosure(false);
  const [securityLinksOpened, { toggle: toggleSecurityLinks }] = useDisclosure(false);
  const [helpLinksOpened, { toggle: toggleHelpLinks }] = useDisclosure(false);

  const { classes, theme } = useStyles();

  const webHostinglinks = hostingMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link className="p-5 space-y-2 no-underline" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            <Image src={item.icon} alt="me" width="50" height="50" />
          </div>

          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));
  // Domain menu Item for desktop
  const domainLinks = domainMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link className="p-5 space-y-2 no-underline" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            <Image src={item.icon} alt="me" width="50" height="50" />
          </div>

          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));
  // website menu Item for desktop
  const websiteLinks = websiteMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link className="p-5 space-y-2 no-underline" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            <Image src={item.icon} alt="me" width="50" height="50" />
          </div>

          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  // security menu Item for desktop
  const securityLinks = securityMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link className="p-5 space-y-2 no-underline" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            <Image src={item.icon} alt="me" width="50" height="50" />
          </div>

          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  // help menu Item for desktop
  const helpLinks = helpMenuItems.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <Link className="p-5 space-y-2 no-underline" href={item.linkUrl}>
          {/* <ThemeIcon size={34} variant="default" radius="md"></ThemeIcon> */}
          <div>
            <Image src={item.icon} alt="me" width="50" height="50" />
          </div>

          <Text size="sm" weight={600}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={10} className="overflow-hidden">
      <Header height={60} px="md" className="bg-transparent border-none px-0">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group>
            <Logo />
          </Group>
          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <a href="#" className={classes.link}></a>

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
                  {webHostinglinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* domain menu items  */}

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
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

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
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
            </HoverCard>

            {/* Security menu items  */}

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
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
                <SimpleGrid cols={2} spacing={0}>
                  {securityLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Help menu items  */}

            <HoverCard width={900} position="bottom" radius="md" shadow="md" withinPortal>
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
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button>Account</Button>
            <SwitchDarkLight />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title={<Logo />} className={classes.hiddenDesktop} zIndex={1000000}>
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <a href="#" className={classes.link}>
            Home
          </a>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Hosting
              </Box>
              <ChevronDownIcon className="h-4 w-4 text-blue-500" />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{webHostinglinks}</Collapse>

          {/* // domain items  */}
          <UnstyledButton className={classes.link} onClick={toggleDomainLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Domain
              </Box>
              <ChevronDownIcon className="h-4 w-4 text-blue-500" />
            </Center>
          </UnstyledButton>
          <Collapse in={domainLinksOpened}>{domainLinks}</Collapse>

          {/* website items  */}
          <UnstyledButton className={classes.link} onClick={toggleWebsiteLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Website
              </Box>
              <ChevronDownIcon className="h-4 w-4 text-blue-500" />
            </Center>
          </UnstyledButton>
          <Collapse in={websiteLinksOpened}>{websiteLinks}</Collapse>

          {/* security items  */}
          <UnstyledButton className={classes.link} onClick={toggleSecurityLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Security
              </Box>
              <ChevronDownIcon className="h-4 w-4 text-blue-500" />
            </Center>
          </UnstyledButton>
          <Collapse in={securityLinksOpened}>{securityLinks}</Collapse>

          {/* help items  */}
          <UnstyledButton className={classes.link} onClick={toggleHelpLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Help
              </Box>
              <ChevronDownIcon className="h-4 w-4 text-blue-500" />
            </Center>
          </UnstyledButton>
          <Collapse in={helpLinksOpened}>{helpLinks}</Collapse>

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Group position="center" grow pb="xl" px="md">
            <Button>Log in</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
