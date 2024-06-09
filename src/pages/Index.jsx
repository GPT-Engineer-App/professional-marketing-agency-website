import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Box, Text, VStack, HStack, Heading, Button, Image, SimpleGrid, IconButton, Input, Textarea, FormControl, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaServicestack, FaImages, FaChartLine, FaUserPlus, FaEnvelope } from "react-icons/fa";
import CountUp from "react-countup";

// Home Page
const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading>Welcome to Our Agency</Heading>
      <Text>Your one-stop solution for marketing and production needs.</Text>
      <Button as={Link} to="/services" colorScheme="teal">
        Explore Our Services
      </Button>
    </VStack>
  </Container>
);

// Services Page
const Services = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={6}>Our Services</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box>
        <Heading size="md">Marketing</Heading>
        <Text>Comprehensive marketing strategies to boost your brand.</Text>
      </Box>
      <Box>
        <Heading size="md">Production</Heading>
        <Text>High-quality production services for all your needs.</Text>
      </Box>
      <Box>
        <Heading size="md">Consulting</Heading>
        <Text>Expert consulting services to guide your business.</Text>
      </Box>
      <Box>
        <Heading size="md">Design</Heading>
        <Text>Creative design solutions to make your brand stand out.</Text>
      </Box>
    </SimpleGrid>
  </Container>
);

// About Us Page
const AboutUs = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={6}>About Us</Heading>
    <Text>We are a team of passionate professionals dedicated to delivering top-notch marketing and production services.</Text>
  </Container>
);

// Gallery Page
const Gallery = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={6}>Gallery</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box>
        <Heading size="md">F&B Industry</Heading>
        <Image src="https://images.unsplash.com/photo-1680745840784-318be3708374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmJTI2YiUyMGluZHVzdHJ5fGVufDB8fHx8MTcxNzk1MDg1Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="F&B Industry" />
      </Box>
      <Box>
        <Heading size="md">Automotive</Heading>
        <Image src="https://images.unsplash.com/photo-1578991132108-16c5296b63dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlfGVufDB8fHx8MTcxNzk1MDg1Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Automotive" />
      </Box>
      <Box>
        <Heading size="md">Real Estate</Heading>
        <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTcxNzk1MDg1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Real Estate" />
      </Box>
      <Box>
        <Heading size="md">E-commerce</Heading>
        <Image src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlfGVufDB8fHx8MTcxNzk1MDg1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="E-commerce" />
      </Box>
      <Box>
        <Heading size="md">3D Modeling</Heading>
        <Image src="https://images.unsplash.com/photo-1612888262725-6b300edf916c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nfGVufDB8fHx8MTcxNzk1MDg1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Modeling" />
      </Box>
    </SimpleGrid>
  </Container>
);

// Stats Page
const Stats = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={6}>Our Achievements</Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Box textAlign="center">
        <Heading size="lg">
          <CountUp end={150} duration={5} />
        </Heading>
        <Text>Projects Completed</Text>
      </Box>
      <Box textAlign="center">
        <Heading size="lg">
          <CountUp end={100} duration={5} />
        </Heading>
        <Text>Happy Clients</Text>
      </Box>
      <Box textAlign="center">
        <Heading size="lg">
          <CountUp end={50} duration={5} />
        </Heading>
        <Text>Awards Won</Text>
      </Box>
    </SimpleGrid>
  </Container>
);

// Join Us Page
const JoinUs = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={6}>Join Us</Heading>
    <Text>We are always looking for talented individuals to join our team. Check out our timeline to see our journey.</Text>
    <Box mt={6}>
      <Heading size="md">Our Journey</Heading>
      <Text>2020 - Founded</Text>
      <Text>2021 - First Major Project</Text>
      <Text>2022 - Expanded to New Markets</Text>
      <Text>2023 - Reached 100 Clients</Text>
    </Box>
  </Container>
);

// Contact Us Page
const ContactUs = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={6}>Contact Us</Heading>
    <FormControl id="name" mb={4}>
      <FormLabel>Name</FormLabel>
      <Input type="text" />
    </FormControl>
    <FormControl id="email" mb={4}>
      <FormLabel>Email</FormLabel>
      <Input type="email" />
    </FormControl>
    <FormControl id="message" mb={4}>
      <FormLabel>Message</FormLabel>
      <Textarea />
    </FormControl>
    <Button colorScheme="teal">Send Message</Button>
  </Container>
);

// Main App Component
const App = () => (
  <Router>
    <Box>
      <HStack spacing={4} p={4} bg="teal.500" color="white">
        <IconButton as={Link} to="/" icon={<FaHome />} aria-label="Home" />
        <IconButton as={Link} to="/services" icon={<FaServicestack />} aria-label="Services" />
        <IconButton as={Link} to="/about-us" icon={<FaInfoCircle />} aria-label="About Us" />
        <IconButton as={Link} to="/gallery" icon={<FaImages />} aria-label="Gallery" />
        <IconButton as={Link} to="/stats" icon={<FaChartLine />} aria-label="Stats" />
        <IconButton as={Link} to="/join-us" icon={<FaUserPlus />} aria-label="Join Us" />
        <IconButton as={Link} to="/contact-us" icon={<FaEnvelope />} aria-label="Contact Us" />
      </HStack>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
