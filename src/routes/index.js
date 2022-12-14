import VotingComponent from '../container/voting/voting';
import AboutComponent from '../container/About/About';
import ContactsComponent from '../container/Contact/Contact';
import FormComponent from '../container/forms/forms';
import PollsComponent from '../container/Polls/createPolls';
import PricingComponent from '../container/Pricing/pricing';
import LoginComponent from '../container/Login/login';


const routes = [
        {
            path:'/voting',
            components:VotingComponent,
            title:'Voting'
        },
        {
            path:'/about',
            components:AboutComponent,
            title:'About'
        },
        {
            path:'/contact',
            components:ContactsComponent,
            title:'Contact'
        },
        {
            path:'/form',
            components:FormComponent,
            title:'Form'
        },
        {
            path:'/polls',
            components:PollsComponent,
            title:'CreatePolls'
        },
        {
            path:'/pricing',
            components:PricingComponent,
            title:'Pricing'
        },
        {
            path:'/login',
            components:LoginComponent,
            title:'Login'
        },

]