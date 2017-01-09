# Strava Ride Analysis

![Strava Segment Comparison](https://github.com/JamesRandall/StravaRideAnalysis/blob/master/screenshots/segmentComparison.png)

This is a small website that is intended to incorporate just enough complexity to illustrate solutions to common problems that you encounter when you start to use the React and Redux frameworks on something more than a ToDo app including:

* Project layout
* Different types of component (higher order, Redux container, dumb)
* Routing
* Redux
* Accessing web services
* Authentication
* Unit testing
* Using a UI framework like Bootstrap
* Using JavaScript components not designed for React
* .... and more!

I'll be writing about this in a, I hope, short and accessible book so check back here soon for a link and improved code - I always find writing about a technical subject makes you think about it deeply and so inevitably you learn and improve as you go.

I'm a keen cyclist and use Strava to bring all my data together but found it was missing a couple of things I wanted to analyse so have based this website around their API but if you don't have a Strava account I've included guest support that just makes use of some embedded demo data but is still accessed via a HTTP API.

Strava doesn't support CORS so I've also written a small (Strava API Proxy)[https://github.com/JamesRandall/StravaAPIProxy] and that's supplied preconfigured in the project. To use it with demo data you don't need to do any configuration but to use it directly against Strava itself you will need to create a Strava application and supply the client ID and key. The instructions for that are here [https://github.com/JamesRandall/StravaAPIProxy].

## Getting Started

Assuming you've already cloned this repo you can launch the website locally by following these steps:

1. In a terminal navigate to the server folder
2. Install the required npm packages: npm install
3. Run it: npm start
4. By default it will attach to port 3100 so in a browser just navigate to http://localhost:3100 to ensure its running
5. In another terminal window navigate to the ui folder
6. Install the required npm packages: npm install
7. Run it: npm start
8. By default it will attach to port 3000 in a browesr so just navigate to http://localhost:3000 and click the Guest Account button.

## Questions and Feedback

I'd love to hear what you think and the best way to reach me is to log an issue here or over on twitter at (@azuretrenches)[https://twitter.com/azuretrenches].
