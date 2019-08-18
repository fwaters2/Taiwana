import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Link
} from "@material-ui/core";
import { AttachMoney, AccountBalance} from "@material-ui/icons";

export default function Cost() {
  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="sm">
        <List>
          <ListItem>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText primary="Cost Breakdown" />
          </ListItem>
          <ListItem divider>
            <List>
              <ListItem>
                <ListItemText
                  primary="Early Bird (BEFORE 8/26)"
                  secondary="$1000/squad (~$333/person) before Monday, August 26th"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Regular Price"
                  secondary="$1200/squad (~$400/person)"
                />
              </ListItem>
            </List>
          </ListItem>
          <ListItem divider>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SvgIcon>
                    <path d="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z" />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Player Package" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reversible Shorts" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Drink ticket from our Cijin Beach Bar" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prizes for deserving squads/individuals" />
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
                <ListItemIcon>
                  <AccountBalance />
                </ListItemIcon>
                <ListItemText primary="Transfer Info" />
              </ListItem>
          <ListItem divider>
            <List>
              <ListItem>
                <ListItemText
                  primary="How To Transfer"
                  secondary="Bank Code: 808  Account #: 0727-968-026168"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Step 1"
                  secondary="Find an ATM at any Bank or convenience store"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Step 2"
                  secondary="Insert your Taiwanese Bank card and click 'ENGLISH'"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Step 3"
                  secondary="'Fund Transfer' to the account above and grab a reciept"
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary="Step 4"
                  secondary="Message the last 4 digits of your account to Donna"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Facebook"
                  secondary={
                    <Link href="https://www.facebook.com/donna.cheng.969">
                      Message Donna
                    </Link>
                  }
                />
                <ListItemText primary="Text" secondary="091-425-7575" />
                <ListItemText primary="Line" secondary="ID: donnacheng" />
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
